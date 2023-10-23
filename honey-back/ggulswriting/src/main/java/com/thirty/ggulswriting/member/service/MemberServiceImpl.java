package com.thirty.ggulswriting.member.service;

import com.thirty.ggulswriting.global.config.auth.LoginUser;
import com.thirty.ggulswriting.global.config.jwt.JwtProcess;
import com.thirty.ggulswriting.global.config.jwt.JwtVO;
import com.thirty.ggulswriting.global.config.service.RedisService;
import com.thirty.ggulswriting.member.entity.Member;
import com.thirty.ggulswriting.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final RedisService redisService;

    @Transactional
    @Override
    public Member join(String kakaoId){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode("");
        Member member = Member.builder()
                .password(password)
                .kakaoId(kakaoId)
                .build();
        Member savedMember = memberRepository.save(member);
        return savedMember;
    }

    @Override
    public String logout(Member member){
        String memberIdStr = Integer.toString(member.getMemberId());
        if(redisService.getValues(memberIdStr)!=null){
            redisService.expireValues(memberIdStr);
        }
        return "ok";
    }

    @Override
    public String reissue(Member member, String token, HttpServletResponse response) {
        String memberIdStr = Integer.toString(member.getMemberId());
        if(redisService.getValues(memberIdStr)==null){
            return "no";
        } else{
            LoginUser loginUser = JwtProcess.verifyAccessToken(token);
            String Jwt= JwtProcess.createAccessToken(loginUser);
            response.addHeader(JwtVO.HEADER,Jwt);
            return "ok";
        }
    }


}
