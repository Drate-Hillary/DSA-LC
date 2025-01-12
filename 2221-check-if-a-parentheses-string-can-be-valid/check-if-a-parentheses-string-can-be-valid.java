class Solution {
    public boolean canBeValid(String s, String locked) {
        if(s.length() % 2 != 0){
            return false;
        }

        int openCount = 0;
        int flexibleCount = 0;
    
        for(int i = 0; i < s.length(); i++){
            if(locked.charAt(i) == '0'){
                flexibleCount++;
            }else if(s.charAt(i) == '('){
                openCount++;
            }else{
                if(openCount > 0){
                    openCount--;
                }else if(flexibleCount > 0){
                    flexibleCount--;
                }else{
                    return false;
                }
            }
        }

        openCount = 0;
        flexibleCount = 0;

        for(int j = s.length() - 1; j >= 0; j--){
            if(locked.charAt(j) == '0'){
                flexibleCount++;
            }else if(s.charAt(j) == ')'){
                openCount++;
            }else{
                if(openCount > 0){
                    openCount--;
                }else if(flexibleCount > 0){
                    flexibleCount--;
                }else{
                    return false;
                }
            }
        }

        return true;
    }

}