import Something, {b} from "./module"

// Webpack produces invalid code
// when it exports and import
// breaking the js minifier
export default Something

// This also breaks:
// export default b

// Both of these work:
// export {Something}
// export {b}
