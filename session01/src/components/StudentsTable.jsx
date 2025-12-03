import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StudentsTable({ data }) {

    const students = data.map(item => item.student);

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 700, margin: "50px auto",mb:10 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>ID</strong></TableCell>
                        <TableCell><strong>Nom</strong></TableCell>
                        <TableCell><strong>Prnom</strong></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {students.map((s, index) => (
                        <TableRow key={index}>
                            <TableCell>{s.id}</TableCell>
                            <TableCell>{s.lastname}</TableCell>
                            <TableCell>{s.firstname}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default StudentsTable;