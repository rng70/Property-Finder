import PropertyItem from './PropertyItem';
import classes from './PropertyList.module.css'

function PropertyList(props){
    const {properties} = props;

    return <ul className={classes.list}>
        {properties.map(property=> <PropertyItem key={property.id} id ={property.id} image={property.image} location={property.location}
                                    date={property.date} title={property.title}/>)}
    </ul>
}

export default PropertyList;