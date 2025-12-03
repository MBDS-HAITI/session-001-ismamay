import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function NotesTable({ data }) {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 700, margin: "50px auto" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Matiere</strong></TableCell>
                        <TableCell><strong>Etudiant</strong></TableCell>
                        <TableCell><strong>Date</strong></TableCell>
                        <TableCell><strong>Note</strong></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.course}</TableCell>
                            <TableCell>
                                {item.student.firstname} {item.student.lastname}
                            </TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.grade}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default NotesTable;
