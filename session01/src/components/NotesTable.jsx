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


function NotesTable({ data }) {

    const notes = data; 

    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("grade");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleSort = (col) => {
        const isAsc = orderBy === col && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(col);
    };

    const filtered = notes.filter(n =>
        (n.student.firstname + n.student.lastname + n.course)
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
        if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
        return 0;
    });

    return (
        <div className="fade-in">

            <input
                className="search-bar"
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <TableContainer component={Paper} className="table-container">

                <Table>

                    <TableHead>
                        <TableRow>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "course"}
                                    direction={order}
                                    onClick={() => handleSort("course")}
                                >
                                    Matiere
                                </TableSortLabel>
                            </TableCell>

                            <TableCell>Etudiant</TableCell>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "date"}
                                    direction={order}
                                    onClick={() => handleSort("date")}
                                >
                                    Date
                                </TableSortLabel>
                            </TableCell>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "grade"}
                                    direction={order}
                                    onClick={() => handleSort("grade")}
                                >
                                    Note
                                </TableSortLabel>
                            </TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sorted
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((n, i) => (
                                <TableRow key={i}>
                                    <TableCell>{n.course}</TableCell>
                                    <TableCell>{n.student.firstname} {n.student.lastname}</TableCell>
                                    <TableCell>{n.date}</TableCell>
                                    <TableCell>{n.grade}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>

                </Table>

                <TablePagination
                    component="div"
                    rowsPerPageOptions={[5, 10, 20]}
                    count={sorted.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
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

export default NotesTable;