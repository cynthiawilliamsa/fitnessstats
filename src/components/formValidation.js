const genderValidation = (gender, err) => {
    if (!gender) {
      err.genderError = 'select 1';
    } else {
      err.genderError = "";
    }
    return err;
}

const ageValidation = (age, err) => {
  if (age.length > 2) {
    err.ageError = "max 2 digits";
  } else {
    err.ageError = "";
  }
  return err;
};
const heightValidation = (height, err) => {
  if (height.length > 3) {
    err.heightError = "max 3 digits";
  } else {
    err.heightError = "";
  }
  return err;
};
const weightValidation = (weight, err) => {
  if (weight.length > 3) {
    err.weightError = "max 3 digits";
  } else {
    err.weightError = "";
  }
  return err;
};
const bodyFatValidation = (bf, err) => {
  if (bf.length > 2) {
    err.bodyFatError = "max 2 digits";
  } else {
    err.bodyFatError = "";
  }
  return err;
};
const leanMassValidation = (lm, err) => {
  if (lm.length > 3) {
    err.leanMassError = "max 3 digits";
  } else {
    err.leanMassError = "";
  }
  return err;
};
const bicepRValidation = (bicepr, err) => {
  if (bicepr.length > 2) {
    err.bicepRError = "max 2 digits";
  } else {
    err.bicepRError = "";
  }
  return err;
};
const chestValidation = (chest, err) => {
    if (chest.length > 2) {
      err.chestError = "max 2 digits";
    } else {
      err.chestError = "";
    }
    return err;
  };
  const waistValidation = (waist, err) => {
    if (waist.length > 2) {
      err.waistError = "max 2 digits";
    } else {
      err.waistError = "";
    }
    return err;
  };
  const thighRValidation = (thighr, err) => {
    if (thighr.length > 2) {
      err.thighRError = "max 2 digits";
    } else {
      err.thighRError = "";
    }
    return err;
  };
  const bicepLValidation = (bicepl, err) => {
    if (bicepl.length > 2) {
      err.bicepLError = "max 2 digits";
    } else {
      err.bicepLError = "";
    }
    return err;
  };
  const neckValidation = (neck, err) => {
    if (neck.length > 2) {
      err.neckError = "max 2 digits";
    } else {
      err.neckError = "";
    }
    return err;
  };
  const hipsValidation = (hips, err) => {
    if (hips.length > 2) {
      err.hipsError = "max 2 digits";
    } else {
      err.hipsError = "";
    }
    return err;
  };
  const thighLValidation = (thighl, err) => {
    if (thighl.length > 2) {
      err.thighLError = "max 2 digits";
    } else {
      err.thighLError = "";
    }
    return err;
  };

module.exports = {
  genderValidation, 
  ageValidation,
  heightValidation,
  weightValidation,
  bodyFatValidation,
  leanMassValidation,
  bicepRValidation,
  chestValidation,
  waistValidation,
  thighRValidation,
  bicepLValidation,
  neckValidation,
  hipsValidation,
  thighLValidation
  
};
