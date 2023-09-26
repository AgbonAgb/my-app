import {useState}  from 'react';
import {BsFillCaretDownFill as Down} from 'react-icons/bs';
import styles from './styles.module.scss';

export const FilterDropDown = (props:any) =>{
    const [show,setShow] = useState<boolean | undefined>(false);
    const text: string = props.text?props.text:'';
    const options:any = props.options?props.options:[];
    const border:string = props.border?props.border:'none';
    const bg :string = props.bg?props.bg:'#f2f2f2';
    const color:string = props.color?props.color:"#222";
    const onChange= props.onChange?props.onChange:(e:any)=>{};
    const [label, setLabel] = useState<any>('');
    const width = props?.width100
    const type = props?.type || null;
    const replace = props?.replace;
    
    const handleSelected = (sel:any)=>{
        setLabel(sel.name);
        onChange(sel);
        setShow(false);
    }
     return(
        <div className={styles.container}>
            <span onClick={()=>setShow(true)} className={styles.btn} style={{border,background:bg,color}}>{!replace?text : !label?text: label}  <span><Down/></span></span>
            {show ?
            <>
                <div 
                    className={styles.wrapper} 
                    onClick={()=>setShow(false)}>
                 </div>
                <div className={width ? styles.drop1 : styles.drop}>
                    {options && options.length > 0?
                    options.map((opt:any,index:number)=>
                        <div key={index} onClick={()=>handleSelected(opt)}>{opt?.name}</div>
                    )
                    :<></>}
                </div>
            </>
            :<></>}
        </div>
    )
}