function parser(sentence) {
    non_terminals = ['S', 'NN', 'VB']
    terminals = ['mbak', 'kakang', 'iwak', 'manuk', 'sepur', 'montor', 'dokar', 'tuwung', 'sego', 'mangan', 'nyopir', 'tuku']

    stack = []
    stack.push('#')
    stack.push('S')

    tokens = sentence.toLowerCase().split(' ')
    tokens.push('EOS')

    parse_table = {}
    generate_parse_table(parse_table)

    idx_char = 0 
    symbol = tokens[idx_char]

    while (stack.length > 0) {
        last = stack[stack.length - 1]

        if (terminals.includes(last)) {
            if (last == symbol) {
                stack.pop()
                idx_char += 1
                symbol = tokens[idx_char]

                if (symbol == 'EOS') {
                    stack.pop()
                }
            } else {
                return [false, `Sentence Di-Deny', 'Kalimat ini ditolak oleh Parser (${last} != ${symbol}).`]
            }
        } else if (non_terminals.includes(last)) {
            if (parse_table[[last, symbol]][0] != 'error') {
                stack.pop()
                pushed_symbol = parse_table[[last, symbol]]

                for (i = pushed_symbol.length - 1; i >= 0; i--) {
                    stack.push(pushed_symbol[i])
                }
            } else {
                return [false, 'Sentence Di-Deny', `Kalimat ini ditolak oleh Parser (parse_table[[${last}, ${symbol}]][0] == error).`]
            }
        } else {
            return [false, 'Sentence Di-Deny', `Kalimat ini ditolak oleh Parser (${last} tidak ada di terminals).`]
        }
    }

    if (symbol == 'EOS' && stack.length == 0) {
        return [true, 'Sentence Di-Accept', 'Kalimat ini diterima oleh Parser.']
    } else {
        return [false, 'Sentence Di-Deny', 'Kalimat ini ditolak oleh Parser.']
    }
}

function generate_parse_table(parse_table) {
    parse_table[['S', 'mbak']] = ['NN', 'VB', 'NN']
    parse_table[['S', 'kakang']] = ['NN', 'VB', 'NN']
    parse_table[['S', 'iwak']] = ['NN', 'VB', 'NN']
    parse_table[['S', 'manuk']] = ['NN', 'VB', 'NN']
    parse_table[['S', 'sepur']] = ['NN', 'VB', 'NN']
    parse_table[['S', 'montor']] = ['NN', 'VB', 'NN']
    parse_table[['S', 'dokar']] = ['NN', 'VB', 'NN']
    parse_table[['S', 'tuwung']] = ['NN', 'VB', 'NN']
    parse_table[['S', 'sego']] = ['NN', 'VB', 'NN']
    parse_table[['S', 'mangan']] = ['error']
    parse_table[['S', 'nyopir']] = ['error']
    parse_table[['S', 'tuku']] = ['error']
    parse_table[['S', 'EOS']] = ['error']

    parse_table[['NN', 'mbak']] = ['mbak']
    parse_table[['NN', 'kakang']] = ['kakang']
    parse_table[['NN', 'iwak']] = ['iwak']
    parse_table[['NN', 'manuk']] = ['manuk']
    parse_table[['NN', 'sepur']] = ['sepur']
    parse_table[['NN', 'montor']] = ['montor']
    parse_table[['NN', 'dokar']] = ['dokar']
    parse_table[['NN', 'tuwung']] = ['tuwung']
    parse_table[['NN', 'sego']] = ['sego']
    parse_table[['NN', 'mangan']] = ['error']
    parse_table[['NN', 'nyopir']] = ['error']
    parse_table[['NN', 'tuku']] = ['error']
    parse_table[['NN', 'EOS']] = ['error']

    parse_table[['VB', 'mbak']] = ['error']
    parse_table[['VB', 'kakang']] = ['error']
    parse_table[['VB', 'iwak']] = ['error']
    parse_table[['VB', 'manuk']] = ['error']
    parse_table[['VB', 'sepur']] = ['error']
    parse_table[['VB', 'montor']] = ['error']
    parse_table[['VB', 'dokar']] = ['error']
    parse_table[['VB', 'tuwung']] = ['error']
    parse_table[['VB', 'sego']] = ['error']
    parse_table[['VB', 'mangan']] = ['mangan']
    parse_table[['VB', 'nyopir']] = ['nyopir']
    parse_table[['VB', 'tuku']] = ['tuku']
    parse_table[['VB', 'EOS']] = ['error']
}