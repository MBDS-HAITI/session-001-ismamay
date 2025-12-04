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

function StudentsTable({ data }) {


    const students = data;

    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("lastName");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleSort = (column) => {
        const isAsc = orderBy === column && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(column);
    };

    
    const filtered = students.filter(s =>
        (`${s.firstName} ${s.lastName} ${s._id}`)
            .toLowerCase()
            .includes(search.toLowerCase())
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
                placeholder="Rechercher un etudiant..."
                className="search-bar"
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
                                    active={orderBy === "lastName"}
                                    direction={order}
                                    onClick={() => handleSort("lastName")}
                                >
                                    Nom
                                </TableSortLabel>
                            </TableCell>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "firstName"}
                                    direction={order}
                                    onClick={() => handleSort("firstName")}
                                >
                                    Prenom
                                </TableSortLabel>
                            </TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sorted
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((s) => (
                                <TableRow key={s._id}>
                                    <TableCell>{s._id}</TableCell>
                                    <TableCell>{s.lastName}</TableCell>
                                    <TableCell>{s.firstName}</TableCell>
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

export default StudentsTable;
