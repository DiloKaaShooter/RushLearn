import React, { useState } from 'react'
import Click from './Button';
import styles from './Upload.module.css';

const Upload = ({setOpen}) => {

  const [file,setFile] = useState(undefined);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h5 className={styles.close} onClick={()=> setOpen(false)}>X</h5>
          <h1 className={styles.title}>Upload a new File</h1>

                  <input className={`${styles.input} ${styles.center}`} type="file" onChange={e=>setFile(e.target.files[0])} />
                  <p>
                    <input className={styles.input} placeholder=" " maxLength={50}/>
                    <label>Enter Your file name</label>
                  </p>
                  <p>
                    <input className={styles.input} placeholder=" " maxLength={50}/>
                    <label>Enter the Course name</label>
                  </p>

                  <div className={styles.btn}>
                    <Click text='Upload' color='customBlack'/>
                  </div>
          
        </div>
      </div>
    </div>
  )
}

export default Upload