function Input(props){
    console.log(props.labels);
    return <input type={props.type} className={props.className ? props.className :"primary-button"} onChange={props.click} />

}

export default Input;



