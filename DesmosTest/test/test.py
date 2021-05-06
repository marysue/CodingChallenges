from app.validateClassCodes import validateClassCodes

distracting_words = [
    "darn",
    "rats",
    "egg",
    "fuzzy",
    "kthx",
    "haha",
    "ugh",
    "777",
    "cheese",
]


existing_codes = []

def test_validate_no_code_given():
    print("test 2")
    value = validateClassCodes('', distracting_words, existing_codes)
    assert value == False

def test_no_distracting_words():
    print("test 3")
    value = validateClassCodes('abc', [], existing_codes)
    assert value == True

def test_sequential_code_exists_in_distracting_words():
    value = validateClassCodes('rats', distracting_words, existing_codes)
    assert value == False

def test_non_sequential_code_exists_in_distracting_words():
    value = validateClassCodes('asbrctdaesgh', distracting_words, existing_codes)
    assert value == False

def test_existing_codes_properly_updated():
    existing_codes = []
    validateClassCodes('goodCode1', distracting_words, existing_codes)
    validateClassCodes('goodCode2', distracting_words, existing_codes)
    expected = ['goodCode1', 'goodCode2']
    print("expected: ", expected)
    assert all([a == b for a, b in zip(existing_codes, expected)])

def test_existing_codes_not_updated():
    existing_codes = []
    validateClassCodes('badWordRats', distracting_words, existing_codes)
    assert len(existing_codes) == 0
