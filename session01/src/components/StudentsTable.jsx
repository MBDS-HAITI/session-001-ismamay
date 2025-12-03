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

   
    const students = data.map(item => item.student);

    
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("lastname");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleSort = (column) => {
        const isAsc = orderBy === column && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(column);
    };


    const filtered = students.filter(s =>
        (s.firstname + " " + s.lastname + " " + s.id)
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

            {}
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
                                    active={orderBy === "id"}
                                    direction={order}
                                    onClick={() => handleSort("id")}
                                >
                                    ID
                                </TableSortLabel>
                            </TableCell>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "lastname"}
                                    direction={order}
                                    onClick={() => handleSort("lastname")}
                                >
                                    Nom
                                </TableSortLabel>
                            </TableCell>

                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "firstname"}
                                    direction={order}
                                    onClick={() => handleSort("firstname")}
                                >
                                    Prenom
                                </TableSortLabel>
                            </TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sorted
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((s, index) => (
                                <TableRow key={index}>
                                    <TableCell>{s.id}</TableCell>
                                    <TableCell>{s.lastname}</TableCell>
                                    <TableCell>{s.firstname}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>

                </Table>

                {}
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