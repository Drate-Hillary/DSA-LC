class Solution {
    fun canCompleteCircuit(gas: IntArray, cost: IntArray): Int {
        var n = gas.size;
        var totalCost = 0;
        var totalGas = 0;
        var tank = 0;
        var startIndex = 0;

        for(i in 0 until n){
            totalGas += gas[i];
            totalCost += cost[i];
            tank += gas[i] - cost[i];


            if(tank < 0){
                startIndex = i + 1;
                tank = 0;
            }
        }

        return if(totalGas >= totalCost) startIndex else -1;
    }
}