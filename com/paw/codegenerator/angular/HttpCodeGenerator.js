/**
 * @author adam.caldwell
 *
 *
 */

var HttpCodeGenerator = function () {

    // generate() method
    this.generate = function (context, requests, options) {
        // TODO: generate the code
        var client_code = "";


        return client_code;
    }
};

// Extension Identifier
HttpCodeGenerator.identifier = "com.paw.codegenerator.angular.HttpCodeGenerator";

// Display Name
HttpCodeGenerator.title = "Angular JS HTTP Code Generator";

// Register function (required)
registerCodeGenerator(HttpCodeGenerator);