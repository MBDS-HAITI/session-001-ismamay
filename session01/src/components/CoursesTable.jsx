import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CoursesTable({ data }) {

    const courses = [...new Set(data.map(item => item.course))];

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 500, margin: "50px auto" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Matieres</strong></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {courses.map((c, index) => (
                        <TableRow key={index}>
                            <TableCell>{c}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CoursesTable;