class Solution {
    public String convert(String s, int numRows) {
        if(numRows == 1 || s.length() <= numRows){
            return s;
        }

        StringBuilder[] rows = new StringBuilder[numRows];
        for(int i = 0; i < numRows; i++){
            rows[i] = new StringBuilder();
        }

        int currentRow = 0;
        boolean goDown = false;
        for(char c : s.toCharArray()){
            rows[currentRow].append(c);
            if(currentRow == 0 || currentRow == numRows - 1){
                goDown = !goDown;
            }
            currentRow += goDown ? 1 : -1;
        }

        StringBuilder sb = new StringBuilder();
        for(StringBuilder row : rows){
            sb.append(row);
        }

        return sb.toString();
    }
}