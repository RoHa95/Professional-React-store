const shortTitle = (title)=>{
const short = title.trim().split(" ").slice(0,3).join(" ");
return short;
}
export { shortTitle };