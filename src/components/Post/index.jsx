import { useState } from "react";
import { dateFns } from "../../utils/date-fns/index";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.scss";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Post muito bacana hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = dateFns.getPublishedDateFormatted(publishedAt);
  const publishedDateRelativeFromNow =
    dateFns.getPublishedDateRelativeFromNow(publishedAt);

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function deleteComment(commentToBeDeleted) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToBeDeleted;
    });

    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeFromNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) =>
          line.type === "paragraph" ? (
            <p key={line.content}>{line.content}</p>
          ) : (
            <p>
              <a key={line.content} href="#">
                {line.content}
              </a>
            </p>
          )
        )}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={(e) => setNewCommentText(e.target.value)}
          value={newCommentText}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((commentText) => (
          <Comment
            key={commentText}
            content={commentText}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
