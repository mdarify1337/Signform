#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <map>
#include <set>
#include <algorithm>
#include <unordered_set>


int main()
{
    unsigned int  s;
    std::cin >> s;
    unsigned int l = 0;
    std::vector<int> r1 , r2;
    while (l < s)
    {
        unsigned int i;
        std::cin >> i;
        unsigned int j;
        std::cin >> j;
        unsigned int l1 = 0;
        while (l1 < i)
        {
            unsigned int k;
            std::cin >> k;
            r1.push_back(k);
            l1++;
        }
        unsigned int l2 = 0;
        while (l2 < j)
        {
            unsigned int p;
            std::cin >> p;
            r2.push_back(p);
            l2++;
        }
        int start1 = 0, start2 = 0;
        int end1 = r1.size() - 1, end2 = r2.size() - 1;
        std::sort(r1.begin(), r1.end());
        std::sort(r2.begin(), r2.end());
        std::reverse(r2.begin(), r2.end());
        int diff = 0;
        while (start1 <= end1)
        {
            if (start1 < end1)
            {
                diff += std::abs(r1[start1] - r2[start2]) + std::abs(r1[end1] - r2[end2]);
            }
            else
            {
                diff += std::max(std::abs(r1[start1] - r2[start2]) , std::abs(r1[end1] - r2[end2]));
            }
            start1++;
            start2++;
            end1--;
            end2--;
        }
        std::cout  << diff << std::endl;
        l++;
        r1.clear();
        r2.clear();
    }
}
