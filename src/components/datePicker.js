import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DatePickers(props) {

  return (
      <TextField style={{marginLeft: "auto", marginRight: "auto"}}
        required
        value={props.value}
        id={props.id}
        label={props.label}
        type="date"
        name={props.name}
        defaultValue={props.defaultValue}
        variant={props.variant}
        className={props.className}
        onChange={props.dateChange}
        error={props.error}
        helperText={props.error}
        InputLabelProps={{
          shrink: true,
        }}
      />

  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);