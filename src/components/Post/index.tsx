import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { dateFns } from "../../utils/date-fns/index";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.scss";

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  content: string;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = dateFns.getPublishedDateFormatted(publishedAt);
  const publishedDateRelativeFromNow =
    dateFns.getPublishedDateRelativeFromNow(publishedAt);

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComment(commentToBeDeleted: string) {
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
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
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
