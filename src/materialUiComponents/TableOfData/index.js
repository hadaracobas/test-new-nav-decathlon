import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TableOfData(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Laufschuhe</StyledTableCell>
            <StyledTableCell>Mountainbike</StyledTableCell>
            <StyledTableCell>Gewicht</StyledTableCell>
            <StyledTableCell>Schlafsack</StyledTableCell>
            <StyledTableCell>Rate Diff</StyledTableCell>
            <StyledTableCell>Nav V Prefer</StyledTableCell>
            {/*
            <StyledTableCell >Protein&nbsp;(g)</StyledTableCell>
            */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>
                {row.lookForRunningShoesAnswer}{" "}
                <small>{row.lookForRunningShoesAnswerTime}</small>
              </StyledTableCell>
              <StyledTableCell>
                {row.lookForMountainbikeAnswer}
                <small>{row.lookForMountainbikeAnswerTime}</small>
              </StyledTableCell>
              <StyledTableCell>
                {row.lookForWeightsAnswer}
                <small>{row.lookForWeightsAnswerTime}</small>
              </StyledTableCell>
              <StyledTableCell>
                {row.lookForSleepingbagAnswer}
                <small>{row.lookForSleepingbagAnswerTime}</small>
              </StyledTableCell>
              <StyledTableCell>
                {row.howEasyWasItToFindOneToFive}
              </StyledTableCell>
              <StyledTableCell>{row.menuPrefer}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
