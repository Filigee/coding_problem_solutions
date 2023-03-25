def count_squares(cuts):
    c = cuts + 1
    c_minus = cuts - 1
    total_cuts = (c * c * c) - (c_minus * c_minus * c_minus)
    return total_cuts
    
    