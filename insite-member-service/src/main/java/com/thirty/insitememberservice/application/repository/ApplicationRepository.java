package com.thirty.insitememberservice.application.repository;

import com.thirty.insitememberservice.application.entity.Application;
import com.thirty.insitememberservice.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ApplicationRepository extends JpaRepository<Application,Integer> {
    List<Application> findAllByMemberAndIsDeletedIsFalse(Member member);
    Optional<Application> findApplicationByApplicationIdAndIsDeletedIsFalse(int applicationId);
    Optional<Application> findApplicationByApplicationUrlAndIsDeletedIsFalse(String applicationUrl);
    Optional<Application> findApplicationByApplicationIdAndMemberAndIsDeletedIsFalse(int applicationId, Member member);
    Optional<Application> findByMemberAndApplicationTokenAndIsDeletedIsFalse(Member member, String applicationToken);

    Optional<Application> findApplicationByApplicationTokenAndIsDeletedIsFalse(String applicationToken);
}
