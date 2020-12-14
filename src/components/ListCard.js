import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { getItemStyle } from './dndUtils';

import { connect } from 'react-redux';
import { removeCardAction } from './../actions/actionRemoveItems';

import './../css/ListCard.css';

const ListCard = (props) => {
  return (
    <Draggable
      draggableId={`droppableCard${String(props.card.id)}`}
      key={`droppableCard${String(props.card.id)}`}
      index={props.index}
    >
      {(provided, snapshot) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <div className="card-text card-custom-alignment">
            <input type="checkbox" className="strike" />
            <span className="strikeThrough">{props.card.text}</span>

            <span
              role="img"
              aria-label="remove-card"
              className="material-icons"
              onClick={() => props.removeCard(props.listID, props.card.id)}
            >
              delete_outline
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCard: (listID, cardID) => removeCardAction(dispatch, listID, cardID),
});

const connectedListCard = connect(null, mapDispatchToProps)(ListCard);

export default connectedListCard;
