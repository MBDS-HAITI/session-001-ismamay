import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

function NotesTable({ data }) {

    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("grade");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleSort = (column) => {
        const isAsc = orderBy === column && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(column);
    };


    const filtered = data.filter(item =>
        (`${item.student?.firstName ?? ""} ${item.student?.lastName ?? ""} ${item.course?.name ?? ""} ${item.grade}`)
            .toLowerCase()
            .includes(search.toLowerCase())
    );


    const sorted = filtered.sort((a, b) => {
        const valA = a[orderBy];
        const valB = b[orderBy];

        if (valA < valB) return order === "asc" ? -1 : 1;
        if (valA > valB) return order === "asc" ? 1 : -1;
        return 0;
    });

    return (
        <div className="fade-in">

            <input
                type="text"
                placeholder="Rechercher..."
                className="search-bar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <TableContainer component={Paper} className="table-card">

                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell>
                                Matiere
                            </TableCell>

                            <TableCell>
                                Etudiant
                            </TableCell>

                            <TableCell>
                                Date
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
                            .map((item) => (
                                <TableRow key={item._id}>

                                    <TableCell>{item.course?.name}</TableCell>

                                    <TableCell>
                                        {item.student?.firstName} {item.student?.lastName}
                                    </TableCell>

                                    <TableCell>
                                        {new Date(item.date).toISOString().substring(0, 10)}
                                    </TableCell>

                                    <TableCell>{item.grade}</TableCell>

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

export default NotesTable;
