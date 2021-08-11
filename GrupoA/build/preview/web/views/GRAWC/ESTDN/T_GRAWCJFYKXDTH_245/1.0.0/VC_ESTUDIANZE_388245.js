//Designer Generator v 7.2.0 - SPR 2020-24 4/12/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.estudianterszrform = designerEvents.api.estudianterszrform || designer.dsgEvents();
function VC_ESTUDIANZE_388245(cobisMainModule) {
cobisMainModule.controllerProvider.register("VC_ESTUDIANZE_388245_MAIN_CTRL", ["$scope", "breadcrumbs",
function($scope, breadcrumbs) {
$scope.breadcrumbs = breadcrumbs;
}]);
cobisMainModule.controllerProvider.register("VC_ESTUDIANZE_388245_CTRL", ["cobisMessage", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",
function(cobisMessage, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
$scope.designer = designer;
$scope.validatorOptions = validatorOptions;
$scope.vc = designer.initViewContainer({
moduleId: "GRAWC",
subModuleId: "ESTDN",
taskId: "T_GRAWCJFYKXDTH_245",
taskVersion: "1.0.0",
viewContainerId: "VC_ESTUDIANZE_388245",
hasCloseModalEvent: false,
serverEvents: false},
"/CTSProxy/services/resources/GRAWC/ESTDN/T_GRAWCJFYKXDTH_245",
designerEvents.api.estudianterszrform,
$scope.rowData );
$scope.kendo = kendo;
//Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
$scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
$scope.dateFormat = 'yyyy/MM/dd';
$scope.dateFormatPlaceholder = $scope.dateFormat;
$scope.vc.routeProvider = cobisMainModule.routeProvider;
if (!$scope.vc.loaded) {
var page = {
hasTemporaryDataSupport: false,
hasInitDataSupport: false,
hasChangeInitDataSupport: false,
hasSearchRenderEvent: false,
ejecTemporaryData: false,
ejecInitData: false,
ejecChangeInitData: false,
ejecSearchRenderEvent: false,
hasTemporaryData: false,
hasInitData: false,
hasChangeInitData: false,
hasCRUDSupport: false,
vcName: 'VC_ESTUDIANZE_388245'
};
if(typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined'){
$scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
$scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
} else {
//CobisPattern no definido en framework de Designer como constante. Actualizar Framework
$scope.vc.cobisPattern = 0;
$scope.vc.isConsolidateView = false;
}
if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
$scope.vc.pk = $scope.queryParameters.pk;
$scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
} else {
$scope.vc.pk = $location.search().pk;
$scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
}
$scope.vc.args.pk = $scope.vc.pk;
$scope.vc.args.mode = $scope.vc.mode;
if(cobis.userContext.getValue(cobis.constant.USER_NAME)){
$scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
}else{
$scope.vc.args.user = "UserOutContainer";
}
$scope.vc.customDialogParameters = $scope.customDialogParameters;
$scope.vc.args.channel = $location.search().channel;
$scope.vc.metadata = {
taskPk : {
moduleId : 'GRAWC',
subModuleId : 'ESTDN',
taskId : 'T_GRAWCJFYKXDTH_245',
version : '1.0.0',
user : $scope.vc.args.user
},
entityNames: {
Estudiante: "Estudiante"
},
entities : {
Estudiante : {
sexo: 'AT41_SEXOQDCX559',
apellido: 'AT90_APELLIDD559',
edad: 'AT92_EDADYCEB559',
nombre: 'AT97_NOMBREZA559'
,
_pks: [],
_entityId: 'EN_ESTUDIAET_559',
_entityVersion: '1.0.0',
_transient: false }
},
relations : [
]
};
$scope.vc.queryProperties = {};
var defaultValues = {
Estudiante:{
}
};
$scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist){
var channel = $scope.vc.args.channel;
for(var en in defaultValues){
if(defaultValues.hasOwnProperty(en) && en === entityName){
for(var att in defaultValues[en]){
if(defaultValues[en].hasOwnProperty(att) && att === attributeName){
for (var ch in defaultValues[en][att]){
if(defaultValues[en][att].hasOwnProperty(ch) && ch === channel){
return defaultValues[en][att][ch];
}
}
}
}
}
}
if(typeof valueIfNotExist !== "undefined"){
return valueIfNotExist;
}else{
return null;
}
};
$scope.vc.temporarySave = function() {
var modelo = $scope.vc.cleanData($scope.vc.model);
var data = {
model: modelo,
trackers: $scope.vc.trackers,
temporaryStorePK: $scope.vc.metadata.taskPk
};
$scope.vc.execute("temporarySave", VC_ESTUDIANZE_388245, data, function() {});
};
$scope.vc.temporaryRead = function() {
if(page.hasTemporaryDataSupport){
var data = {
model: $scope.vc.model,
temporaryStorePK: $scope.vc.metadata.taskPk
};
return $scope.vc.executeService("readTemporaryData", VC_ESTUDIANZE_388245, data).then(
function(response) {
var result = $scope.vc.processTemporaryResponse(response);
if (result) {
$scope.vc.execute("deleteTemporaryData", VC_ESTUDIANZE_388245, data, function() {});
$scope.vc.crud.addTrackers($scope.vc.model);
}
page.hasTemporaryData = result;
page.ejecTemporaryData = response.success;
return page;
});
}else{
page.ejecTemporaryData = false;
page.hasTemporaryData = false;
return page;
}
};
$scope.vc.viewState.keyDown = function(e) {
dsgnrUtils.container.validateOnEnter(e, $scope.vc);
};
$scope.vc.viewState.VC_ESTUDIANZE_388245 = {
style: []
};
$scope.vc.model.Estudiante = {
sexo: $scope.vc.channelDefaultValues("Estudiante","sexo"),
apellido: $scope.vc.channelDefaultValues("Estudiante","apellido"),
edad: $scope.vc.channelDefaultValues("Estudiante","edad"),
nombre: $scope.vc.channelDefaultValues("Estudiante","nombre")
};
//ViewState - Group: Group1660
$scope.vc.createViewState({
id: "G_ESTUDIATNS_700284"
,hasId: true
,componentStyle: []
,label: 'Group1660'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Entity: Estudiante, Attribute: nombre
$scope.vc.createViewState({
id: "VA_NOMBRETFNIYGRCQ_782284"
,componentStyle: []
,label: "Nombre"
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Entity: Estudiante, Attribute: apellido
$scope.vc.createViewState({
id: "VA_APELLIDOAIYMYRP_679284"
,componentStyle: []
,label: "Apellido"
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Entity: Estudiante, Attribute: edad
$scope.vc.createViewState({
id: "VA_EDADJXOAXQJIRPZ_948284"
,componentStyle: []
,label: "Edad"
,format: "n0"
,decimals: 0
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//watch tmpModel - Entity: Estudiante, Attribute: edad
$scope.$watch('vc.model.Estudiante.edad', function(newValue, oldValue) {
if (newValue !== oldValue) {
if(angular.isDefined($scope.vc.tmpModel.Estudiante)){
$scope.vc.tmpModel.Estudiante.edad=newValue;
}else{
$scope.vc.tmpModel.Estudiante = {edad : newValue};
}
}
});
//ViewState - Entity: Estudiante, Attribute: sexo
$scope.vc.createViewState({
id: "VA_SEXOHPBYZZNSDFP_488284"
,componentStyle: []
,label: "Sexo"
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
,isComboBox: true
});
$scope.vc.catalogs.VA_SEXOHPBYZZNSDFP_488284 = new kendo.data.DataSource({
transport: {
read: function(options) {
$scope.vc.loadCatalogCobis('VA_SEXOHPBYZZNSDFP_488284', 'cl_sexo' , function(response) {
var data=[];
if (angular.isDefined(response.data)){
var catalogResponse = response.data['RESULTVA_SEXOHPBYZZNSDFP_488284'];
if(angular.isDefined(catalogResponse) && !$.isEmptyObject(catalogResponse)){
data = catalogResponse;
options.success(data);
}else{
options.success(data);
}
} else {
options.success(data);
}
$scope.vc.setComboBoxDefaultValue("VA_SEXOHPBYZZNSDFP_488284", true, data[0], 'code', data);
$scope.vc.setEnableAndReadonlyStatus("VA_SEXOHPBYZZNSDFP_488284");
} , null, options.data.filter, 0);
}
},
requestStart: function(e) {
$scope.vc.requestStartRead(e,"VA_SEXOHPBYZZNSDFP_488284",null);
},
serverFiltering: true,
schema: { model: { id: "code"}}
}); $scope.vc.createViewState({
id: "VA_VABUTTONTYMSTWE_972284"
,componentStyle: []
,label: "Guardar"
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Command: Accept
$scope.vc.createViewState({
id: "T_GRAWCJFYKXDTH_245_ACCEPT"
,componentStyle: []
,label: 'Accept'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Command: Cancel
$scope.vc.createViewState({
id: "T_GRAWCJFYKXDTH_245_CANCEL"
,componentStyle: []
,label: 'Cancel'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
if ($scope.vc.parentVc) {
$scope.vc.afterOpenGridDialog();
}
}
$scope.isInvalid = function (form, field) {
if(!field){
return false;
}
var submitted = $scope.vc.submitted[form.$name];
return ((submitted || field.$dirty) && field.$invalid);
};
$scope._initPage_CRUDExecuteQueryEntities = function(page) {
if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
if(page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData){
return $scope.vc.CRUDExecuteQueryEntities(page);
}else if(page.hasCRUDSupport){
return $scope.vc.CRUDExecuteQueryEntities(page);
}else{
return page;
}
} else {
return page;
}
};
$scope._initPage_InitializeTrackers = function(page) {
$scope.vc.addChangeEvents($scope);
$scope.vc.crud.addTrackers($scope.vc.model);
return page;
};
$scope._initPage_ChangeInitData = function(page) {
return $scope.vc.changeInitData(page, $scope.vc);
};
$scope._initPage_ProcessRender = function(page) {
if (page.hasSearchRenderEvent) {
$scope.vc.render('VC_ESTUDIANZE_388245');
}
return page;
};
if($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude){
//para ventanas modales se usa ng-include con onload
$scope.runLifeCycle = function () {
var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
if(threadLifeCycle){
if(!$scope.isDesignerInclude){
cobis.showMessageWindow.loading(true, "none");
}
$scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
cobis.showMessageWindow.loading(false);
}
};
}else{
//con ngView no funciona el $document.ready se cambia por $viewContentLoaded
$scope.$on('$viewContentLoaded', function() {
if ($scope.vc.loaded) {
//Si se esta regresando de otra pantalla
$scope.vc.addAfterInitDataFlags($scope);
$scope.vc.addChangeEvents($scope);
if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
$scope.vc.onCloseModalEvent();
}
if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
$scope.vc.afterCloseGridDialog();
}
cobis.showMessageWindow.loading(false);
} else {
//Si es la primera vez que se ejecuta la pantalla
var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
if(threadLifeCycle){
$scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
cobis.showMessageWindow.loading(false);
}
}
});
}
}]);
}
if (typeof cobisMainModule === "undefined") {
var cobisMainModule = cobis.createModule("VC_ESTUDIANZE_388245", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", "designerModule"],[]);
cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",
function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
$ocLazyLoadProvider.config({
asyncLoader: $script
});
$locationProvider.html5Mode(true);
cobisMainModule.controllerProvider = $controllerProvider;
cobisMainModule.compileProvider = $compileProvider;
cobisMainModule.routeProvider = $routeProvider;
cobisMainModule.filterProvider = $filterProvider;
cobisMainModule.provide = $provide;
var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
$routeProvider.when("/VC_ESTUDIANZE_388245", {
templateUrl: "VC_ESTUDIANZE_388245_FORM.html",
controller: "VC_ESTUDIANZE_388245_CTRL",
label: "EstudianteRszrForm",
}).otherwise({
redirectTo: function (routeParams, path, search) {
return "/VC_ESTUDIANZE_388245?" + $.param(search);
}
});
VC_ESTUDIANZE_388245(cobisMainModule);
}]);
} else {
VC_ESTUDIANZE_388245(cobisMainModule);
}