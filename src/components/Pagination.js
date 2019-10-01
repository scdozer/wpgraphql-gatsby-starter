import React from "react"
import { Link } from "gatsby"

const Pagination = ({ pageNumber, hasNextPage, allPosts, itemsPerPage }) => (
    <div>
      {pageNumber > 1 && (
        <div>
          <Link to={pageNumber > 2 ? `/page/${pageNumber - 1}` : `/`}>
            Previous Posts
          </Link>
        </div>
      )}
      <div>
        {Array.from({ length: allPosts.length / itemsPerPage }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={i === 0 ? "/" : `/page/${i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      {hasNextPage && (
        <div>
          <Link to={`page/${pageNumber + 1}`}>Next Posts</Link>
        </div>
      )}
    </div>
  )
  
  export default Pagination