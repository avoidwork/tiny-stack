module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		concat: {
			options: {
				banner: "/**\n" +
				" * <%= pkg.description %>\n" +
				" *\n" +
				" * @author <%= pkg.author %>\n" +
				" * @copyright <%= grunt.template.today('yyyy') %>\n" +
				" * @license <%= pkg.license %>\n" +
				" * @link <%= pkg.homepage %>\n" +
				" * @version <%= pkg.version %>\n" +
				" */\n"
			},
			dist: {
				src: [
					"src/intro.js",
					"src/constructor.js",
					"src/factory.js",
					"src/outro.js"
				],
				dest: "lib/<%= pkg.name %>.js"
			}
		},
		eslint: {
			target: [
				"index.js",
				"Gruntfile.js",
				"lib/<%= pkg.name %>.es6.js",
				"test/*.js"
			]
		},
		nodeunit: {
			all: ["test/*.js"]
		},
		watch: {
			js: {
				files: "<%= concat.dist.src %>",
				tasks: "default"
			},
			pkg: {
				files: "package.json",
				tasks: "default"
			}
		}
	});

	// tasks
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-nodeunit");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-babel");
	grunt.loadNpmTasks("grunt-eslint");

	grunt.task.registerTask("babili", "Minifies ES2016+ code", function () {
		const fs = require("fs"),
			path = require("path"),
			data = fs.readFileSync(path.join(__dirname, "lib", "tiny-stack.js"), "utf8").replace("\"use strict\";", ""), // Stripping "use strict"; because it's injected
			pkg = require(path.join(__dirname, "package.json")),
			banner = "/*\n " + new Date().getFullYear() + " " + pkg.author + "\n @version " + pkg.version + "\n*/\n\"use strict\";";

		try {
			const minified = require("babel-core").transform(data, {sourceFileName: "tiny-stack.js", sourceMaps: true, presets: ["minify"]});

			fs.writeFileSync(path.join(__dirname, "lib", "tiny-stack.min.js"), banner + minified.code + "\n//# sourceMappingURL=tiny-stack.min.js.map", "utf8");
			grunt.log.ok("1 file created.");
			fs.writeFileSync(path.join(__dirname, "lib", "tiny-stack.min.js.map"), JSON.stringify(minified.map), "utf8");
			grunt.log.ok("1 sourcemap created.");
		} catch (e) {
			console.error(e.stack || e.message || e);
			throw e;
		}
	});

	// aliases
	grunt.registerTask("test", ["eslint", "nodeunit"]);
	grunt.registerTask("build", ["concat", "babili"]);
	grunt.registerTask("default", ["build", "test"]);
};
