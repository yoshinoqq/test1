const CommentList = ({PhotoFeedbackItem}) => {
    return (<div className="flex flex-col gap-3">
        <p className="text-black text-xs self-start">Comments</p>
      <div className="flex flex-col self-start">
        {PhotoFeedbackItem.comments.length !== 0 ? (
          PhotoFeedbackItem.comments.map((comment) => (
            <div className="text-black text-xs" key={comment.id}>
             <span className="text-black font-bold">{comment.author} </span>: {comment.text}
            </div>
          ))
        ) : (
          <div className="text-black text-xs">нет комментариев</div>
        )}
      </div>
    </div>)
}

export default CommentList;