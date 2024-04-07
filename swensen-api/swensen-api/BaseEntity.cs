using System;
using System.ComponentModel.DataAnnotations;

namespace swensen_api
{
    public class BaseEntity
    {
        [Key]
        public Guid UID { get; set; } = Guid.NewGuid();

        [StringLength(1)]
        public string IsCancel { get; set; } = "N";

        [StringLength(100)]
        public string CreatedBy { get; set; } = "system";
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        [StringLength(100)]
        public string UpdateBy { get; set; } = "system";

        public DateTime UpdateDate { get; set; } = DateTime.Now;

    }
}

