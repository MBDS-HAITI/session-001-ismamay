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

function CoursesTable({ data }) {

  
    const courses = [...new Set(data.map(item => item.course))]
        .map((name, index) => ({ id: index + 1, name }));

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

    const filtered = courses.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
        if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
        return 0;
    });

    return (
        <div className="fade-in">

            <input
                type="text"
                className="search-bar"
                placeholder="Rechercher matiere..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <TableContainer component={Paper} className="table-container">

                <Table>

                    <TableHead>
                        <TableRow>

                            <TableCell>ID</TableCell>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "name"}
                                    direction={order}
                                    onClick={() => handleSort("name")}
                                >
                                    Matiere
                                </TableSortLabel>
                            </TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sorted
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((c) => (
                                <TableRow key={c.id}>
                                    <TableCell>{c.id}</TableCell>
                                    <TableCell>{c.name}</TableCell>
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