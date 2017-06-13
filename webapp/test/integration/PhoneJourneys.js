jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"xperi/test/integration/NavigationJourneyPhone",
		"xperi/test/integration/NotFoundJourneyPhone",
		"xperi/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});