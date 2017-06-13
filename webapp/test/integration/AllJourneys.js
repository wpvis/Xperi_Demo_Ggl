jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Customers in the list
// * All 3 Customers have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"xperi/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"xperi/test/integration/pages/App",
	"xperi/test/integration/pages/Browser",
	"xperi/test/integration/pages/Master",
	"xperi/test/integration/pages/Detail",
	"xperi/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "xperi.view."
	});

	sap.ui.require([
		"xperi/test/integration/MasterJourney",
		"xperi/test/integration/NavigationJourney",
		"xperi/test/integration/NotFoundJourney",
		"xperi/test/integration/BusyJourney",
		"xperi/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});