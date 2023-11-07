package com.thirty.insiterealtimereadservice.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReferrerDto implements Comparable<ReferrerDto>{

    private int id;

    private String referrer;

    private int count;

    private double percentage;

    public static ReferrerDto create(String referrer, int count, double percentage){
        return ReferrerDto.builder()
            .referrer(referrer)
            .count(count)
            .percentage(percentage)
            .build();
    }

    public ReferrerDto addId(int id){
        this.id = id;
        return this;
    }

    @Override
    public int compareTo(@NotNull ReferrerDto o) {
        return o.count - this.getCount();
    }
}
