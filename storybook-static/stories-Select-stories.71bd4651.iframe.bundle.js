"use strict";(self.webpackChunkfoundationtheme=self.webpackChunkfoundationtheme||[]).push([[9128],{"./src/stories/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefSelect:()=>DefSelect,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefSelect$parameters,_DefSelect$parameters2,G_tru_wp_theme_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react_feather__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-feather/dist/icons/chevron-down.js"),_components_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,G_tru_wp_theme_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var plantType=[{id:"1",name:"Evergreen"},{id:"2",name:"Fruit"},{id:"3",name:"Vines"},{id:"4",name:"Tree"}];const __WEBPACK_DEFAULT_EXPORT__={title:"Select",component:_components_index__WEBPACK_IMPORTED_MODULE_1__.Ph,parameters:{docs:{description:{component:"Select components are used for collecting user provided information from a list of options."}}}};var Template=function Template(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_components_index__WEBPACK_IMPORTED_MODULE_1__.Ph,_objectSpread(_objectSpread({},args),{},{children:plantType.map((function(item){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_components_index__WEBPACK_IMPORTED_MODULE_1__.PN,{value:item.name,children:item.name},"plant_type_".concat(item.id))}))}))};Template.displayName="Template";var DefSelect=Template.bind({});DefSelect.args={placeholder:"Please Select",endIcon:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(react_feather__WEBPACK_IMPORTED_MODULE_3__.Z,{size:20}),size:"md",colorScheme:"primary",label:"",variant:"solid"},DefSelect.argTypes={as:{control:{type:""}},startIcon:{control:{type:""}}},DefSelect.parameters=_objectSpread(_objectSpread({},DefSelect.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DefSelect$parameters=DefSelect.parameters)||void 0===_DefSelect$parameters?void 0:_DefSelect$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Select {...args}>\r\n        {plantType.map(item => <SelectOptions value={item.name} key={`plant_type_${item.id}`}>\r\n                {item.name}\r\n            </SelectOptions>)}\r\n    </Select>"},null===(_DefSelect$parameters2=DefSelect.parameters)||void 0===_DefSelect$parameters2||null===(_DefSelect$parameters2=_DefSelect$parameters2.docs)||void 0===_DefSelect$parameters2?void 0:_DefSelect$parameters2.source)})})}}]);