import { Component } from "react";


class CommentPost extends Component {

    render() {
        const { content, CommentOwnerUsername, createdAt } = this.props.commentData
        return(
            <div className="comment">
                <span style={{ fontStyle: "italic", color: "#0ca5e297"}}>
                    { "Comment by: "} { CommentOwnerUsername }
                    {" on "}
                    <time style={{fontStyle: "italic"}}>
                        { " " }
                        { new Date(createdAt).toDateString() }
                    </time>
                </span>
                <p> { content } </p>
            </div>
        )
    }
}
export default CommentPost;