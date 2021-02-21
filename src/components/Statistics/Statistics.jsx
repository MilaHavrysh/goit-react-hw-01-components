import React from "react";
import PropTypes from "prop-types"
import styles from './Statistics.module.css'

const Statistics=({title, stats})=>(
    <section className="statistics">
  <h2 className={styles.title}>{title}</h2>
    <ul className={styles.stat_list}>
        {stats.map(({id, label, percentage})=>(
            <li key={id} className={styles.stat_list_item} 
          style={{
            backgroundColor:`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
          }}>
             <span className={styles.label}>{label}</span>
             <span className={styles.percentage}>{percentage}%</span>  
        </li>))
        }
    </ul>
    </section>  
  ) 

Statistics.defaultProps={
  title:null
}

Statistics.propTypes={
  title: PropTypes.string,
  stats:PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
    })
  ).isRequired   
}  
    

export default Statistics