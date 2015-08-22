import java.util.*;

class Solution {

public int solution(int[] A) {
int sum = 0;
int n = A.length;
int[] sums = new int[n];
for (int i=0; i<n; i++) {
sum += A[i];
if (sum == 0) return 0;
sums[i] = sum;
}

Arrays.sort(sums);
int ans = Math.abs(sums[0]);
for (int i=0; i<n-1; i++) {
ans = Math.min(ans, Math.abs(sums[i+1] - sums[i]));
}
return ans;
}
}