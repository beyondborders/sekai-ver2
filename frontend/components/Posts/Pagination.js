import styles from "./pagination.module.scss"
import Link from "next/link"


import { headers } from "next/headers";

const PaginationComponent = (props) => {
  const { baseURL, currentPage, totalPages } = props

  const renderRange = () => {
    if (totalPages === 1) return [1];

    const delta = 2
    const left = currentPage - delta
    const right = currentPage + delta + 1
    const range = []

    if (totalPages > 1 && currentPage !== 1) {
      range.push(<Link href={`${baseURL}?page=${currentPage-1}`} className={styles.prev}>‹</Link>);
    }

    for (let i = 1; i <= totalPages; i++) {
      if (i == 1 || i == totalPages || (i >= left && i < right)) {
        if (i === left && i > 2) {
          range.push(<div>…</div>);
        }

        if (i === currentPage) {
          range.push(<div className={styles.active}>{i}</div>);
        } else {
          range.push(<Link href={`${baseURL}?page=${i}`}>{i}</Link>);
        }

        if (i === right - 1 && i < totalPages - 1) {
          range.push(<div>…</div>);
        }
      }
    }

    if (totalPages > 1 && currentPage !== totalPages) {
      range.push(<Link href={`${baseURL}?page=${currentPage+1}`} className={styles.next}>›</Link>);
    }
    return (
      range.map((r) => {
        return (
          r
        )
      })
    );
  }


  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        {renderRange()}
      </div>
    </div>

  );
};

export default PaginationComponent;