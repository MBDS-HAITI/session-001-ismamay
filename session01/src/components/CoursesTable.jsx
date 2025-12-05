import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from "@mui/material/TableSortLabel";
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CoursesTable({ data }) {
    const navigate = useNavigate();
    const uniqueCourses = data;

    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("name");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleSort = (col) => {
        const isAsc = orderBy === col && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(col);
    };

    const filtered = uniqueCourses.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.toLowerCase().includes(search.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
        const valA = a[orderBy]?.toString().toLowerCase();
        const valB = b[orderBy]?.toString().toLowerCase();

        if (valA < valB) return order === "asc" ? -1 : 1;
        if (valA > valB) return order === "asc" ? 1 : -1;
        return 0;
    });

    return (
        <div className="fade-in">

            <input
                type="text"
                className="search-bar"
                placeholder="Rechercher une matiere..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <TableContainer component={Paper} className="table-container">

                <Table>

                    <TableHead>
                        <TableRow>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "_id"}
                                    direction={order}
                                    onClick={() => handleSort("_id")}
                                >
                                    ID
                                </TableSortLabel>
                            </TableCell>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "name"}
                                    direction={order}
                                    onClick={() => handleSort("name")}
                                >
                                    Matiere
                                </TableSortLabel>
                            </TableCell>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "code"}
                                    direction={order}
                                    onClick={() => handleSort("code")}
                                >
                                    Code
                                </TableSortLabel>
                            </TableCell>

                            <TableCell align="center">
                                Actions
                            </TableCell>


                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sorted
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((c) => (
                                <TableRow key={c._id}>
                                    <TableCell>{c._id}</TableCell>
                                    <TableCell>{c.name}</TableCell>
                                    <TableCell>{c.code}</TableCell>
                                    <TableCell align="center">
                                        <button
                                            className="details-btn"
                                            onClick={() => navigate(`/courses/${c._id}`)}
                                        >
                                            View Details
                                        </button>
                                    </TableCell>

                                </TableRow>
                            ))}
                    </TableBody>

                </Table>

                <TablePagination
                    component="div"
                    rowsPerPageOptions={[5, 10, 20]}
                    count={sorted.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(e, p) => setPage(p)}
                    onRowsPerPageChange={(e) => {
                        setRowsPerPage(parseInt(e.target.value, 10));
                        setPage(0);
                    }}
                />

            </TableContainer>
        </div>
    );
}

export default CoursesTable;

