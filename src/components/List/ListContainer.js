import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux';

// export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// const mapStateToProps = (state, props) => ({
//   columns: state.columns,
// });

const mapStateToProps = (state, props) => {
  // console.log('state: ', state);
  // console.log('props: ', props.id);
  return {
    columns: getColumnsForList(state, props.id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
