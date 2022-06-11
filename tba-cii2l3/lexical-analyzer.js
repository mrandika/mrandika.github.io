function lexical_analysis(sentence) {
    alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    states = ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9',
    'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19',
    'q20', 'q21', 'q22', 'q23', 'q24', 'q25', 'q26', 'q27', 'q28', 'q29',
    'q30', 'q31']

    transition_table = {}

    states.forEach(state => {
        alphabets.forEach(alphabet => {
            transition_table[[state, alphabet]] = 'error'
        });

        transition_table[[state, '#']] = 'error'
        transition_table[[state, ' ']] = 'error'
    });

    accepted_states = ['q5', 'q11', 'q14', 'q15', 'q19', 'q25', 'q27', 'q30']

    accepted_states.forEach(state => {
        transition_table[[state, ' ']] = 'q30'
        transition_table[[state, '#']] = 'accept'
    });

    generate_transition_table(transition_table)

    input_string = sentence + '#'
    idx_char = 0
    state = 'q0'
    current_token = ''

    while (state != 'accept') {
        current_char = input_string[idx_char]
        current_token += current_char
        state = transition_table[[state, current_char]]

        if (accepted_states.includes(state)) {
            current_token = ''
        }

        if (state == 'error') {
            return [false, 'Sentence Di-Deny', `Kalimat ini ditolak oleh Lexical Analyzer (${state} == error).`]
        }

        idx_char += 1
    }

    if (state == 'accept') {
        return [true, 'Sentence Di-Accept', 'Kalimat ini diterima oleh Lexical Analyzer.']
    } else {
        return [false, 'Sentence Di-Deny', `Kalimat ini ditolak oleh Lexical Analyzer (${state} != accept).`]
    }
}

function generate_transition_table(transition_table) {
    transition_table[['q0', ' ']] = 'q0'
    
    transition_table[['q30', 'm']] = 'q1'
    transition_table[['q30', 'k']] = 'q11'
    transition_table[['q30', 'i']] = 'q6'
    transition_table[['q30', 's']] = 'q10'
    transition_table[['q30', 'd']] = 'q20'
    transition_table[['q30', 't']] = 'q22'

    transition_table[['q0', 'm']] = 'q1'
    transition_table[['q1', 'b']] = 'q2'
    transition_table[['q2', 'a']] = 'q3'
    transition_table[['q3', 'k']] = 'q11'

    transition_table[['q0', 'k']] = 'q11'
    transition_table[['q11', 'a']] = 'q3'
    transition_table[['q3', 'k']] = 'q11'
    transition_table[['q11', 'a']] = 'q3'
    transition_table[['q3', 'n']] = 'q4'
    transition_table[['q4', 'g']] = 'q5'

    transition_table[['q0', 'i']] = 'q6'
    transition_table[['q6', 'w']] = 'q7'
    transition_table[['q7', 'a']] = 'q3'
    transition_table[['q3', 'k']] = 'q11'

    transition_table[['q0', 'm']] = 'q1'
    transition_table[['q1', 'a']] = 'q8'
    transition_table[['q8', 'n']] = 'q4'
    transition_table[['q4', 'u']] = 'q9'
    transition_table[['q9', 'k']] = 'q11'

    transition_table[['q0', 's']] = 'q10'
    transition_table[['q10', 'e']] = 'q12'
    transition_table[['q12', 'p']] = 'q13'
    transition_table[['q13', 'u']] = 'q14'
    transition_table[['q14', 'r']] = 'q15'

    transition_table[['q0', 'm']] = 'q1'
    transition_table[['q1', 'o']] = 'q16'
    transition_table[['q16', 'n']] = 'q4'
    transition_table[['q4', 't']] = 'q17'
    transition_table[['q17', 'o']] = '18'
    transition_table[['q18', 'r']] = 'q19'

    transition_table[['q0', 'd']] = 'q20'
    transition_table[['q20', 'o']] = 'q16'
    transition_table[['q16', 'k']] = 'q21'
    transition_table[['q21', 'a']] = 'q8'
    transition_table[['q8', 'r']] = 'q19'

    transition_table[['q0', 't']] = 'q22'
    transition_table[['q22', 'u']] = 'q14'
    transition_table[['q14', 'w']] = 'q7'
    transition_table[['q7', 'u']] = 'q14'
    transition_table[['q14', 'n']] = 'q23'
    transition_table[['q23', 'g']] = 'q5'

    transition_table[['q0', 's']] = 'q10'
    transition_table[['q10', 'e']] = 'q12'
    transition_table[['q12', 'g']] = 'q24'
    transition_table[['q24', 'o']] = 'q25'

    transition_table[['q0', 'm']] = 'q1'
    transition_table[['q1', 'a']] = 'q8'
    transition_table[['q8', 'n']] = 'q4'
    transition_table[['q4', 'g']] = 'q5'
    transition_table[['q5', 'a']] = 'q26'
    transition_table[['q26', 'n']] = 'q27'

    transition_table[['q0', 'n']] = 'q28'
    transition_table[['q28', 'y']] = 'q29'
    transition_table[['q29', 'o']] = 'q25'
    transition_table[['q25', 'p']] = 'q31'
    transition_table[['q31', 'i']] = 'q32'
    transition_table[['q32', 'r']] = 'q19'

    transition_table[['q0', 't']] = 'q22'
    transition_table[['q22', 'u']] = 'q14'
    transition_table[['q14', 'k']] = 'q33'
    transition_table[['q33', 'u']] = 'q14'
}