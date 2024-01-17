package com.ujcms.core.domain.base;

import java.time.OffsetDateTime;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.Nullable;

/**
 * This class was generated by MyBatis Generator.
 *
 * @author MyBatis Generator
 */
public class TaskBase {
    /**
     * 数据库表名
     */
    public static final String TABLE_NAME = "task";

    /**
     * 任务ID
     */
    @NotNull
    private Integer id = 0;

    /**
     * 站点ID
     */
    @NotNull
    private Integer siteId = 0;

    /**
     * 用户ID
     */
    @NotNull
    private Integer userId = 0;

    /**
     * 名称
     */
    @Length(max = 50)
    @NotNull
    private String name = "";

    /**
     * 开始时间
     */
    @NotNull
    private OffsetDateTime beginDate = OffsetDateTime.now();

    /**
     * 结束时间
     */
    @Nullable
    private OffsetDateTime endDate;

    /**
     * 已完成数量
     */
    @NotNull
    private Integer current = 0;

    /**
     * 总数量
     */
    @NotNull
    private Integer total = 0;

    /**
     * 类型(1:HTML生成,2:全文索引生成)
     */
    @NotNull
    private Short type = 0;

    /**
     * 状态(0:等待,1:运行中,2:出错,3:停止,4:完成)
     */
    @NotNull
    private Short status = 0;

    /**
     * 错误信息
     */
    @Nullable
    private String errorInfo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSiteId() {
        return siteId;
    }

    public void setSiteId(Integer siteId) {
        this.siteId = siteId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public OffsetDateTime getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(OffsetDateTime beginDate) {
        this.beginDate = beginDate;
    }

    @Nullable
    public OffsetDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(@Nullable OffsetDateTime endDate) {
        this.endDate = endDate;
    }

    public Integer getCurrent() {
        return current;
    }

    public void setCurrent(Integer current) {
        this.current = current;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Short getType() {
        return type;
    }

    public void setType(Short type) {
        this.type = type;
    }

    public Short getStatus() {
        return status;
    }

    public void setStatus(Short status) {
        this.status = status;
    }

    @Nullable
    public String getErrorInfo() {
        return errorInfo;
    }

    public void setErrorInfo(@Nullable String errorInfo) {
        this.errorInfo = errorInfo;
    }
}