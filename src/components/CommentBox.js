import React, { useState, useCallback } from "react";

function CommentBox() {
  const [comment, setComment] = useState('');

  const handleChange = useCallback(
    event =>
      setComment(event.target.value),
    []
  );

  const handleSubmit = useCallback(event => {
    event.preventDefault()

    // TODO: call an action creator and save comment
    setComment('')
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea onChange={handleChange} value={comment} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};
// class CommentBox extends Component {
//   state = { comment: "" };

//   handleChange = event => {
//     this.setState({
//       comment: event.target.value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     // TODO: call an action creator and save comment
//     this.setState({ comment: "" });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h4>Add a Comment</h4>
//         <textarea onChange={this.handleChange} value={this.state.comment} />
//         <div>
//           <button>Submit Comment</button>
//         </div>
//       </form>
//     );
//   }
// }

export default CommentBox
