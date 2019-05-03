import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const CategoryButtons = props => {
  const { classes } = props;
  return (
    <div>

      <div>
        <Button variant="outlined" className={classes.button}>
          Категория 1
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Выбранная категория
        </Button>
        <Button variant="outlined" className={classes.button}>
          Категория 2
        </Button>
        <Button variant="outlined" className={classes.button}>
          Категория 3
        </Button>
        <Button variant="outlined" className={classes.button}>
          Категория 4
        </Button>
      </div>

    </div>
  );
};

CategoryButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CategoryButtons);
