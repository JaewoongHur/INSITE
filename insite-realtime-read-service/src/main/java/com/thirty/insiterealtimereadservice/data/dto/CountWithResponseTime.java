package com.thirty.insiterealtimereadservice.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CountWithResponseTime {

    private int count;

    private double responseTime;

    public static CountWithResponseTime create(int count, double responseTime){
        return CountWithResponseTime.builder()
            .count(count)
            .responseTime(responseTime)
            .build();
    }
}
