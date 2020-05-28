import React from "react";

function Pagination(props) {
    const {page, perPage, total, onChange} = props;

    const maxPage = Math.ceil(total / perPage);

    const nextPage = function (e) {
        e.preventDefault();
        if (page >= maxPage) return;
        onChange(page + 1);
    };
    const prevPage = function (e) {
        e.preventDefault();
        if (page <= 1) return;
        onChange(page - 1);
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${1 >= page ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={prevPage} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </button>
                </li>
                <li className={`page-item ${maxPage <= page ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={nextPage} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;