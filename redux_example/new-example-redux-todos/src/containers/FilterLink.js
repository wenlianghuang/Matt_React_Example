import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import {useSelector,useDispatch} from 'react-redux';




/* For render component
function mapStateToProps(state,ownProps){
  console.log(ownProps);
  return {
    active:ownProps.filterofHW === state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch,ownProps){
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filterofHW))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
*/

/**For hook */
//useSelector(state) and its childrens are actually in the reducers
//render component in this file, does not need a extract file "Link.js"
export default (props) => {
  let Statevisibility = useSelector(state=>state.visibilityFilter);
  const dispatch = useDispatch();
  let active = props.filterofHW === Statevisibility;
  return(
  <button 
        onClick={()=>dispatch(setVisibilityFilter(props.filterofHW))}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
        >
            {props.children}
  </button>
  )
  
}






